import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { RedirectService } from '../../core/services/redirect.service';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './packages.html',
  styleUrl: './packages.css'
})
export class PackagesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private redirectService: RedirectService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.selectedCategory = params['category'];
      }
    });
  }
  selectedCategory = 'all';

  categories = [
    { id: 'all', label: 'All Packages', icon: 'bi-grid' },
    { id: 'launch', label: 'Startup Launch', icon: 'bi-rocket-takeoff' },
    { id: 'web', label: 'Web & App', icon: 'bi-laptop' },
    { id: 'marketing', label: 'Marketing', icon: 'bi-megaphone' },
    { id: 'legal', label: 'Legal & Compliance', icon: 'bi-file-earmark-text' },
    { id: 'design', label: 'Branding & Design', icon: 'bi-palette' },
  ];

  howItWorks = [
    { icon: '', title: 'Choose a Package', desc: 'Pick the package that fits your startup stage and budget.' },
    { icon: '', title: 'Meet Your Manager', desc: 'A dedicated project manager contacts you within 24 hours.' },
    { icon: '', title: 'We Build Everything', desc: 'Our teams handle the development, legal, and branding work.' },
    { icon: 'bi-rocket-takeoff', title: 'You Launch!', desc: 'Your business goes live. We continue with support and growth.' },
  ];

  packages = [
    {
      id: 1, category: 'launch', badge: 'MOST POPULAR', badgeClass: 'bg-primary text-white',
      name: 'A-to-Z Launchpad', tagline: 'From Zero to Fully Operational in 30 Days',
      price: 350000, currency: 'BDT ', period: 'one-time', icon: 'bi-rocket-takeoff',
      accent: '#0d6efd', accentLight: '#eef2ff',
      features: ['Full Business Formation & Registration','Trade License (RJSC / City Corp)','Custom Web + Mobile App','Logo, Branding & Identity Kit','Social Media Profiles Setup (5 Platforms)','1 Year Digital Marketing Strategy','Domain, Hosting & Business Email','Dedicated Business Launch Manager','12 Months Priority Support']
    },
    {
      id: 2, category: 'launch', badge: 'GREAT VALUE', badgeClass: 'bg-primary text-white',
      name: 'Growth Accelerator', tagline: 'For Businesses Ready to Scale Fast',
      price: 150000, currency: 'BDT ', period: 'one-time', icon: 'bi-graph-up-arrow',
      accent: '#6610f2', accentLight: '#f3eeff',
      features: ['E-Commerce / Custom Web Platform','3 Months Digital Marketing','Social Media Management (3 Platforms)','Logo & Brand Identity','Business Email Setup','SEO Foundation Setup','6 Months Priority Support']
    },
    {
      id: 3, category: 'web', badge: 'STARTER', badgeClass: 'bg-primary text-white',
      name: 'Digital Foundation', tagline: 'Your Professional Online Presence Starts Here',
      price: 50000, currency: 'BDT ', period: 'one-time', icon: 'bi-globe2',
      accent: '#198754', accentLight: '#edfdf5',
      features: ['Professional 5-Page Website','Domain & Hosting (1 Year)','Business Email Setup (3 Accounts)','Mobile Responsive Design','Basic SEO Optimization','3 Months Technical Support']
    },
    {
      id: 4, category: 'web', badge: 'ADVANCED', badgeClass: 'bg-primary text-white',
      name: 'E-Commerce Pro', tagline: 'Sell Online with a Powerful Store',
      price: 99000, currency: 'BDT ', period: 'one-time', icon: 'bi-bag-check',
      accent: '#0dcaf0', accentLight: '#e8fbff',
      features: ['Full E-Commerce Platform (100+ Products)','Payment Gateway Integration (bKash, Card, Nagad)','Inventory & Order Management','Mobile App (Android)','SSL Security Certificate','Admin Dashboard & Analytics','6 Months Support']
    },
    {
      id: 5, category: 'marketing', badge: 'MONTHLY', badgeClass: 'bg-primary text-white',
      name: 'Digital Marketing Boost', tagline: 'Get Noticed, Get Customers, Get Revenue',
      price: 29000, currency: 'BDT ', period: '/month', icon: 'bi-megaphone-fill',
      accent: '#fd7e14', accentLight: '#fff4e8',
      features: ['Facebook & Instagram Ads Management','Google Ads Campaign Setup','Monthly Content Creation (16 Posts)','SEO & Keyword Optimization','Email Marketing (up to 5K subscribers)','Monthly Performance Reports']
    },
    {
      id: 6, category: 'legal', badge: 'COMPLIANCE', badgeClass: 'bg-primary text-white',
      name: 'Business Registration Pack', tagline: 'Get Legally Registered & Ready to Operate',
      price: 39000, currency: 'BDT ', period: 'one-time', icon: 'bi-file-earmark-check',
      accent: '#6c757d', accentLight: '#f3f4f5',
      features: ['Business Name Registration (RJSC)','Trade License (City Corp / Union Parishad)','TIN Certificate Application','VAT Registration (if required)','Bank Account Setup Guidance','Document Filing & Notarization']
    },
    {
      id: 7, category: 'design', badge: 'BRAND IDENTITY', badgeClass: 'bg-primary text-white',
      name: 'Complete Brand Kit', tagline: 'Look Professional from Day One',
      price: 24000, currency: 'BDT ', period: 'one-time', icon: 'bi-palette-fill',
      accent: '#d63384', accentLight: '#fdf0f6',
      features: ['Custom Logo Design (3 Concepts)','Brand Color Palette & Typography','Business Card Design','Letterhead & Invoice Template','Social Media Banner Pack (10 Templates)','Brand Guidelines Document','Source Files (AI/PSD)']
    },
    {
      id: 8, category: 'web', badge: 'ENTERPRISE', badgeClass: 'bg-primary text-white',
      name: 'Custom Enterprise App', tagline: 'Full-Scale Software Built for Your Vision',
      price: 499000, currency: 'BDT ', period: 'from', icon: 'bi-building-gear',
      accent: '#212529', accentLight: '#f0f0f0',
      features: ['Custom Web + Mobile App (iOS & Android)','AI-Powered Features Integration','Enterprise-Grade Security & Compliance','Multi-Tenant Architecture','Admin & Analytics Dashboard','API Integration & Third-party Connections','24/7 Dedicated Support (1 Year)']
    },
  ];

  get filteredPackages() {
    if (this.selectedCategory === 'all') return this.packages;
    return this.packages.filter(p => p.category === this.selectedCategory);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSubscribe(pkg: any) {
    const targetUrl = '/client/payments';
    if (this.authService.isLoggedIn()) {
      this.router.navigate([targetUrl]);
    } else {
      this.redirectService.setReturnUrl(targetUrl);
      this.router.navigate(['/login']);
    }
  }

  // Prices in BDT (Bangladeshi Taka)
}
