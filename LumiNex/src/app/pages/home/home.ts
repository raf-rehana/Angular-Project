import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteContentService } from '../../core/services/site-content.service';
import { SiteContent } from '../../core/models/site-content';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  siteContent: SiteContent | null = null;
  isLoading = true;

  constructor(private siteContentService: SiteContentService) {}

  ngOnInit() {
    this.loadSiteContent();
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
          icon: 'bi-rocket-takeoff',
          title: 'Launch Packages',
          description: 'Full startup readiness including Trade Licenses, Web/Mobile Apps, and Business Registration.',
          linkText: 'View Packages',
          linkUrl: '/packages',
          color: 'primary'
        },
        {
          icon: 'bi-globe',
          title: 'Digital Presence',
          description: 'High-end Web development, E-commerce platforms, and SEO to get your brand seen globally.',
          linkText: 'Explore Web',
          linkUrl: '/packages',
          color: 'success'
        },
        {
          icon: 'bi-megaphone',
          title: 'Growth & Marketing',
          description: 'Complete digital marketing, social media management, and brand identity kits for scale.',
          linkText: 'Grow Now',
          linkUrl: '/packages',
          color: 'warning'
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
}