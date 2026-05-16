import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { SiteContentService } from '../../core/services/site-content.service';
import { SiteContent } from '../../core/models/site-content';
import { ServiceCatalogueService } from '../../core/services/service-catalogue';
import { ServiceCategory } from '../../core/models/service';
import { RedirectService } from '../../core/services/redirect.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  siteContent: SiteContent | null = null;
  categories: ServiceCategory[] = [];
  groupedServices: { category: ServiceCategory, services: any[] }[] = [];
  isLoading = true;

  constructor(
    private siteContentService: SiteContentService,
    private catalogueService: ServiceCatalogueService,
    private authService: AuthService,
    private router: Router,
    private redirectService: RedirectService
  ) {}

  ngOnInit() {
    // Auto-redirect if already logged in
    if (this.authService.isLoggedIn()) {
      const user = this.authService.currentUser;
      if (user) {
        if (user.role === 'CLIENT') {
          this.router.navigate(['/client/dashboard']);
        } else if (user.role === 'EMPLOYEE') {
          this.router.navigate(['/employee/summary']);
        } else if (user.role === 'ADMIN' || user.role === 'SUPER_ADMIN') {
          this.router.navigate(['/admin/dashboard']);
        }
      }
    }

    this.loadSiteContent();
    this.loadHomeData();

    // Listen for navigation ends to handle internal route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkScroll();
    });
  }

  loadHomeData() {
    this.catalogueService.getCategories().subscribe(cats => {
      this.categories = cats;
      this.catalogueService.getServices().subscribe(services => {
        // Target specific categories requested by user (IDs 5 to 10)
        const targetIds = ['5', '6', '7', '8', '9', '10'];
        this.groupedServices = targetIds.map(id => {
          const category = cats.find(c => c.id === id);
          const catServices = services.filter(s => s.categoryId === id).slice(0, 4); // Show top 4 per category
          return { category: category!, services: catServices };
        }).filter(group => group.category);
        
        this.isLoading = false;
        this.checkScroll();
      });
    });
  }

  checkScroll() {
    const url = this.router.url;
    let targetId = '';
    
    if (url.includes('/services')) targetId = 'sector-01';
    else if (url.includes('/about')) targetId = 'about';

    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const yOffset = -100; // Account for fixed header
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
    }
  }

  loadSiteContent() {
    this.isLoading = true;
    this.siteContentService.getActiveContent().subscribe({
      next: (content) => {
        if (content) {
          this.siteContent = content;
        } else {
          // Fallback to default content if no content found
          this.siteContent = this.getDefaultContent();
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading site content:', error);
        // Fallback to default content on error
        this.siteContent = this.getDefaultContent();
        this.isLoading = false;
      }
    });
  }

  private getDefaultContent(): SiteContent {
    return {
      id: '1',
      heroBadge: 'NEXT GEN SERVICE HUB',
      heroTitle: 'You Bring the <span class="text-primary">Idea</span>. We Build the <span class="text-primary">Business</span>.',
      heroSubtitle: 'Have money and a vision? We handle the rest. From Trade Licenses and Legal Paperwork to Web Development and Digital Marketing — LumiNex is your complete startup partner.',
      heroImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      heroFeatures: [
        { icon: 'bi-check-circle-fill', text: 'Expert Teams' },
        { icon: 'bi-check-circle-fill', text: '24/7 Support' },
        { icon: 'bi-check-circle-fill', text: 'Secure Portal' }
      ],
      aboutBadge: 'Who We Are',
      aboutTitle: 'Driving Innovation with a Purpose',
      aboutDescription: 'At LumiNex, we believe that professional service management should be seamless, transparent, and scalable for every business.',
      aboutImageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      visionTitle: 'Our Vision',
      visionDescription: 'To redefine the global landscape of B2B service delivery by creating an intelligent, transparent, and highly accessible ecosystem. We envision a future where every business can access world-class professional services through a single, unified digital platform that blends cutting-edge AI automation with specialized human ingenuity.',
      missionTitle: 'Our Mission',
      missionDescription: 'Our mission is to eliminate the operational hurdles that stifle business growth. We are committed to providing a secure, reliable, and user-centric platform that handles everything from IT infrastructure and brand development to legal compliance. By simplifying complex workflows, we empower entrepreneurs to focus on innovation.',
      experienceYears: '10+ Years',
      servicesTitle: 'Startup Packages',
      servicesSubtitle: "We don't just provide services; we build foundations. Choose a package that covers everything from your legal identity to your digital presence.",
      services: [
        {
          icon: 'bi-laptop',
          title: 'Digital Foundation',
          description: 'Professional Website, Domain (1 Year), Business Email, and Basic SEO.',
          linkText: 'Subscribe Now',
          linkUrl: '/client/payments',
          color: 'primary',
          features: [
            "Professional Website Design",
            "Domain & Hosting (1 Year)",
            "Business Email Setup",
            "Basic SEO Optimization",
            "3 Months Support"
          ]
        },
        {
          icon: 'bi-graph-up-arrow',
          title: 'Growth Accelerator',
          description: 'E-Commerce Platform, Marketing (3 Months), Social Media Mgmt, and 24/7 Support.',
          linkText: 'Subscribe Now',
          linkUrl: '/client/payments',
          color: 'success',
          features: [
            "E-Commerce / Custom Web Platform",
            "Digital Marketing (3 Months)",
            "Social Media Management",
            "Logo & Brand Identity",
            "Priority 24/7 Support"
          ]
        },
        {
          icon: 'bi-rocket-takeoff',
          title: 'A-to-Z Launchpad',
          description: 'Business Formation, Trade License, Web & Mobile App, and Launch Manager.',
          linkText: 'Subscribe Now',
          linkUrl: '/client/payments',
          color: 'warning',
          features: [
            "Full Business Formation Support",
            "Trade License & Legal Paperwork",
            "Full Online Platform Readiness",
            "Premium Web & Mobile App",
            "1 Year Marketing Strategy",
            "Dedicated Launch Manager"
          ]
        }
      ],
      ctaTitle: 'Ready to start your journey?',
      ctaDescription: 'Join hundreds of successful businesses already using LumiNex.',
      ctaButtonText: 'Explore All Packages',
      ctaButtonLink: '/packages',
      socialProofTitle: 'Join our growing community',
      socialLinks: [
        { name: 'Facebook', url: 'https://facebook.com', icon: 'bi-facebook' },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'bi-linkedin' },
        { name: 'GitHub', url: 'https://github.com', icon: 'bi-github' },
        { name: 'YouTube', url: 'https://youtube.com', icon: 'bi-youtube' },
        { name: 'WhatsApp', url: 'https://wa.me', icon: 'bi-whatsapp' }
      ],
      isActive: true,
      updatedAt: new Date().toISOString()
    };
  }

  getColorClass(color: string): string {
    const colorMap: { [key: string]: string } = {
      'primary': 'text-primary',
      'success': 'text-success',
      'warning': 'text-warning',
      'danger': 'text-danger',
      'info': 'text-info',
      'secondary': 'text-secondary'
    };
    return colorMap[color] || 'text-primary';
  }

  getBgColorClass(color: string): string {
    const colorMap: { [key: string]: string } = {
      'primary': 'bg-soft-primary',
      'success': 'bg-success-soft',
      'warning': 'bg-warning-soft',
      'danger': 'bg-danger-soft',
      'info': 'bg-info-soft',
      'secondary': 'bg-secondary-soft'
    };
    return colorMap[color] || 'bg-soft-primary';
  }

  // Returns a strong, professional badge background color per service index
  getServiceBadgeColor(index: number): string {
    const palette = [
      '#1D4ED8', '#065F46', '#92400E', '#1E3A5F',
      '#7C3AED', '#0F766E', '#B45309', '#1F2937',
      '#155E75', '#3B0764', '#064E3B', '#1C1917',
    ];
    return palette[index % palette.length];
  }

  getCategoryButtonColor(index: number): string {
    const palette = [
      '#2563EB', // Blue
      '#059669', // Emerald
      '#D97706', // Amber
      '#DC2626', // Red
      '#7C3AED', // Violet
      '#0891B2', // Cyan
    ];
    return palette[index % palette.length];
  }

  onServiceAction(service: any) {
    const targetUrl = service.linkUrl;
    if (this.authService.isLoggedIn()) {
      this.router.navigate([targetUrl]);
    } else {
      this.redirectService.setReturnUrl(targetUrl);
      this.router.navigate(['/login']);
    }
  }

  onServiceRequest(service: any) {
    const targetUrl = '/client/request-form';
    const queryParams = { serviceId: service.id };
    if (this.authService.isLoggedIn()) {
      this.router.navigate([targetUrl], { queryParams });
    } else {
      const fullUrl = this.router.createUrlTree([targetUrl], { queryParams }).toString();
      this.redirectService.setReturnUrl(fullUrl);
      this.router.navigate(['/login']);
    }
  }
}
