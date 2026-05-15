import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SiteContentService } from '../../core/services/site-content.service';
import { SiteContent, ServiceCard, SocialLink, HeroFeature } from '../../core/models/site-content';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-site-content',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './site-content.component.html',
  styleUrl: './site-content.component.css'
})
export class SiteContentComponent implements OnInit {
  siteContent: SiteContent | null = null;
  isLoading = true;
  isSaving = false;
  activeTab = 'hero';
  message = '';
  messageType: 'success' | 'error' = 'success';

  tabs = [
    { id: 'hero', label: 'Hero Section', icon: 'bi-image' },
    { id: 'about', label: 'About Section', icon: 'bi-info-circle' },
    { id: 'services', label: 'Services Section', icon: 'bi-grid' },
    { id: 'cta', label: 'CTA Section', icon: 'bi-megaphone' },
    { id: 'social', label: 'Social Proof', icon: 'bi-share' }
  ];

  constructor(private siteContentService: SiteContentService) {}

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.isLoading = true;
    this.siteContentService.getSiteContent().subscribe({
      next: (content) => {
        if (content) {
          this.siteContent = content;
        } else {
          // Initialize with default content
          this.siteContent = this.getDefaultContent();
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading site content:', error);
        this.showMessage('Error loading content', 'error');
        this.isLoading = false;
      }
    });
  }

  getDefaultContent(): SiteContent {
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
      visionDescription: 'To redefine the global landscape of B2B service delivery by creating an intelligent, transparent, and highly accessible ecosystem.',
      missionTitle: 'Our Mission',
      missionDescription: 'Our mission is to eliminate the operational hurdles that stifle business growth.',
      experienceYears: '10+ Years',
      servicesTitle: 'Startup Packages',
      servicesSubtitle: 'We don\'t just provide services; we build foundations. Choose a package that covers everything from your legal identity to your digital presence.',
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

  saveContent() {
    if (!this.siteContent) return;
    
    this.isSaving = true;
    this.siteContent.updatedAt = new Date().toISOString();

    if (this.siteContent.id) {
      this.siteContentService.updateSiteContent(this.siteContent.id, this.siteContent).subscribe({
        next: () => {
          this.showMessage('Content saved successfully!', 'success');
          this.isSaving = false;
        },
        error: (error) => {
          console.error('Error saving content:', error);
          this.showMessage('Error saving content', 'error');
          this.isSaving = false;
        }
      });
    } else {
      this.siteContentService.createSiteContent(this.siteContent).subscribe({
        next: (created) => {
          this.siteContent = created;
          this.showMessage('Content created successfully!', 'success');
          this.isSaving = false;
        },
        error: (error) => {
          console.error('Error creating content:', error);
          this.showMessage('Error creating content', 'error');
          this.isSaving = false;
        }
      });
    }
  }

  showMessage(text: string, type: 'success' | 'error') {
    this.message = text;
    this.messageType = type;
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }

  // Service card management
  addServiceCard() {
    if (!this.siteContent) return;
    const newCard: ServiceCard = {
      icon: 'bi-star',
      title: 'New Service',
      description: 'Service description here',
      linkText: 'Learn More',
      linkUrl: '/packages',
      color: 'primary'
    };
    this.siteContent.services.push(newCard);
  }

  removeServiceCard(index: number) {
    if (!this.siteContent) return;
    this.siteContent.services.splice(index, 1);
  }

  moveServiceCard(index: number, direction: 'up' | 'down') {
    if (!this.siteContent) return;
    const services = this.siteContent.services;
    if (direction === 'up' && index > 0) {
      [services[index], services[index - 1]] = [services[index - 1], services[index]];
    } else if (direction === 'down' && index < services.length - 1) {
      [services[index], services[index + 1]] = [services[index + 1], services[index]];
    }
  }

  // Social link management
  addSocialLink() {
    if (!this.siteContent) return;
    const newLink: SocialLink = {
      name: 'New Platform',
      url: 'https://',
      icon: 'bi-link'
    };
    this.siteContent.socialLinks.push(newLink);
  }

  removeSocialLink(index: number) {
    if (!this.siteContent) return;
    this.siteContent.socialLinks.splice(index, 1);
  }

  // Hero feature management
  addHeroFeature() {
    if (!this.siteContent) return;
    const newFeature: HeroFeature = {
      icon: 'bi-check-circle-fill',
      text: 'New Feature'
    };
    this.siteContent.heroFeatures.push(newFeature);
  }

  removeHeroFeature(index: number) {
    if (!this.siteContent) return;
    this.siteContent.heroFeatures.splice(index, 1);
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}
