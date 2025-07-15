# Tender Tiger Email Template Documentation

## Overview
This package contains three optimized HTML email templates that recreate the exact design shown in the Tender Tiger promotional email. Each template is specifically optimized for different email clients and platforms.

## Templates Included

### 1. `tender_tiger_email_template.html` - Full Featured Template
**Best for:** Modern email clients (Gmail web, Apple Mail, Thunderbird)
- **Features:** 
  - Advanced CSS styling with gradients and flexbox
  - Responsive design with media queries
  - Complex visual elements and animations
  - Full color scheme and branded design
  - Interactive elements and hover effects

### 2. `tender_tiger_email_mobile.html` - Mobile-Optimized Template
**Best for:** Mobile email apps and responsive design
- **Features:**
  - Simplified mobile-first design
  - Stacked layouts for small screens
  - Touch-friendly buttons and links
  - Optimized font sizes for mobile reading
  - Progressive enhancement approach

### 3. `tender_tiger_outlook_simple.html` - Outlook-Compatible Template
**Best for:** Microsoft Outlook (all versions), IBM Notes, older email clients
- **Features:**
  - Table-based layouts only
  - Minimal CSS with inline styles
  - MSO (Microsoft Office) conditional comments
  - Simplified design elements
  - Maximum compatibility across email clients

## Template Content Structure

All templates include these sections:
1. **Header Section** - Logo, title, and CTA button
2. **Welcome Message** - Personalized greeting
3. **Tenders Section** - Available tender opportunities table
4. **Competitors Section** - Competitor performance data
5. **Services Section** - Available services listing
6. **Trust Section** - Company credibility indicators
7. **Welcome Gift Section** - Free credits offer
8. **Contact Section** - Support information
9. **Footer** - Copyright and unsubscribe link

## Email Client Compatibility

### ✅ Excellent Support
- **Gmail** (Web, iOS, Android)
- **Apple Mail** (macOS, iOS)
- **Thunderbird**
- **Yahoo Mail**
- **Outlook.com** (Web)

### ⚠️ Good Support (use simplified template)
- **Microsoft Outlook** (2016, 2019, 2021, 365)
- **IBM Notes**
- **Outlook Express**

### 🔄 Limited Support (use mobile template)
- **Older Android Email Apps**
- **BlackBerry Email**
- **Windows Mail**

## Customization Guide

### Colors
Primary color palette:
- Orange: `#ff6b35`
- Dark Blue: `#2c3e50`
- Light Gray: `#f8f9fa`
- Success Green: `#28a745`
- Link Blue: `#007bff`

### Typography
- **Primary Font:** Arial, sans-serif
- **Headings:** Bold, 18px-24px
- **Body Text:** Regular, 14px-16px
- **Small Text:** 12px-14px

### Personalization Variables
Replace these placeholders with dynamic content:
- `<First Name>` - User's first name
- Email links - Update with actual support email
- Phone numbers - Update with actual contact number
- Tender data - Replace with real tender information
- Competitor data - Replace with actual competitor metrics

## Implementation Instructions

### For Email Marketing Platforms

#### Mailchimp
1. Create new template
2. Choose "Code your own" option
3. Paste the HTML code
4. Use merge tags: `*|FNAME|*` for first name
5. Test across different email clients

#### SendGrid
1. Go to Dynamic Templates
2. Create new template
3. Use Design Editor or HTML editor
4. Replace variables with handlebars: `{{first_name}}`
5. Test with different devices

#### Constant Contact
1. Create new email
2. Choose "HTML" option
3. Paste template code
4. Replace variables with their merge tags
5. Preview and test

### For Custom Email Systems

#### PHP Implementation
```php
$emailBody = file_get_contents('tender_tiger_email_template.html');
$emailBody = str_replace('<First Name>', $user['first_name'], $emailBody);
$emailBody = str_replace('support@tendertiger.co.in', $config['support_email'], $emailBody);

// Send email using PHPMailer or similar
```

#### Node.js Implementation
```javascript
const fs = require('fs');
const template = fs.readFileSync('tender_tiger_email_template.html', 'utf8');
const personalizedEmail = template
  .replace('<First Name>', user.firstName)
  .replace('support@tendertiger.co.in', config.supportEmail);
```

## Testing Recommendations

### Pre-Send Testing
1. **HTML Validation:** Use W3C HTML validator
2. **Email Testing Tools:** 
   - Litmus
   - Email on Acid
   - Mail Tester
3. **Device Testing:**
   - iPhone Mail app
   - Android Gmail app
   - Outlook desktop
   - Gmail web interface

### A/B Testing Suggestions
1. **Subject Line Variations**
2. **CTA Button Colors**
3. **Mobile vs Desktop Layouts**
4. **Content Length**
5. **Send Time Optimization**

## Performance Optimization

### Image Optimization
- All images should be optimized for web
- Use alt text for accessibility
- Consider using web-safe fonts as fallbacks
- Implement lazy loading for large images

### Code Optimization
- Minify HTML when possible
- Use inline CSS for better compatibility
- Avoid JavaScript in email templates
- Keep total email size under 100KB

## Troubleshooting Common Issues

### Outlook Issues
- **Problem:** Layout breaks in Outlook
- **Solution:** Use the `outlook_simple.html` template
- **Prevention:** Always use table-based layouts

### Gmail Clipping
- **Problem:** Email gets clipped in Gmail
- **Solution:** Keep email under 102KB
- **Prevention:** Optimize images and minify code

### Mobile Rendering
- **Problem:** Email doesn't display well on mobile
- **Solution:** Use the `mobile.html` template
- **Prevention:** Test on actual devices

### Dark Mode Support
- **Problem:** Email doesn't work in dark mode
- **Solution:** Add CSS media queries for dark mode
- **Prevention:** Test in dark mode clients

## Legal Compliance

### GDPR Compliance
- Include clear unsubscribe links
- Add privacy policy links
- Ensure consent for email marketing
- Include company address

### CAN-SPAM Compliance
- Include physical address
- Clear unsubscribe mechanism
- No deceptive subject lines
- Identify as advertisement if required

## Analytics Integration

### Tracking Parameters
Add UTM parameters to all links:
```html
<a href="https://example.com?utm_source=email&utm_medium=email&utm_campaign=tender_alert">
```

### Pixel Tracking
Add tracking pixel before closing `</body>` tag:
```html
<img src="https://track.example.com/pixel.gif?email={{email}}" width="1" height="1" />
```

## Maintenance

### Regular Updates
- Update tender data weekly
- Refresh competitor information monthly
- Review and update contact information quarterly
- Test templates with new email client versions

### Version Control
- Keep templates in version control
- Document all changes
- Test before deploying updates
- Maintain backup copies

## Support and Resources

### Additional Resources
- [Email Design Guidelines](https://example.com/design-guidelines)
- [Email Client Testing Tools](https://example.com/testing-tools)
- [Email Marketing Best Practices](https://example.com/best-practices)

### Technical Support
For technical issues or questions about these templates:
- Email: developer@tendertiger.co.in
- Documentation: https://docs.tendertiger.co.in
- Support Portal: https://support.tendertiger.co.in

---

*Last updated: January 2024*
*Template Version: 1.0*