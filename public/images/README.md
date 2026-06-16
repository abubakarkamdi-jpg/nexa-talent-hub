# Local Images for Vendors

Add your vendor/entertainer photos here. The app supports both local and external images.

## Usage

### Local Images
1. Add your image files to this folder (jpg, png, webp, etc.)
2. In `app/page.tsx`, update the vendor's `imageUrl` field:

```typescript
const vendorsData: Vendor[] = [
  {
    name: 'DJ Spark',
    // ... other fields ...
    imageUrl: '/images/dj-spark.jpg',  // Local image
  },
  {
    name: 'AfroKwame Dance Group',
    // ... other fields ...
    imageUrl: '/images/afrokwame.jpg',  // Local image
  },
];
```

### External URLs
Continue using external image URLs as before:

```typescript
imageUrl: 'https://images.unsplash.com/photo-xxx?w=500&auto=format&fit=crop'
```

### No Image (Emoji Fallback)
Leave `imageUrl` empty to show the emoji gradient:

```typescript
imageUrl: ''  // Shows emoji background
```

## Recommended Image Specifications

- **Dimensions**: 500x400px or similar aspect ratio
- **Format**: JPEG or PNG
- **Size**: 50-200KB (optimize for web)
- **Alt text**: Image filename should describe the content

## File Naming
Use descriptive lowercase names:
- `dj-spark.jpg`
- `afrokwame-dancers.jpg`
- `drama-coach-tunde.jpg`
