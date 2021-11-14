export const RESPONSIVE_IMAGE_FRAGMENT = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

const MODULE_BASE_FRAGMENT = `
  type: _modelApiKey
  id
  name
  marginBottom
  marginTop
  accentColor{
    hex
  }
`;

export const META_TAGS_FRAGMENT = `
  attributes
  content
  tag
`;

export const heroModuleFragment = `
  ... on ModuleHeroRecord {
    ${MODULE_BASE_FRAGMENT}
    headline
    subtext
    ctaLabel
    ctaUrl
    scrollDownAsset {
      url
    }
    layout
    media {
      id
      url
      video {
        thumbnailUrl
        mp4Url
      }
      responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800})  {
        ...responsiveImageFragment
      }
    }
  }
`;

export const howWeWorkModuleFragment = `
... on ModuleHowWeWorkRecord {
  ${MODULE_BASE_FRAGMENT}
  howWeWorkTitle
  moduleBackgroundColor {
    hex
  }
  arrow {
    id
    url
    responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800})  {
      ...responsiveImageFragment
    }
  }
  howWeWorkSteps {
    id
    stepTitle
    arrowEnabled
    stepbackgroundcolor {
      hex
    }
    stepMedia {
      id
      url
      responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800})  {
        ...responsiveImageFragment
      }
    }
  }
}
`;
export const bannerModuleFragment = `... on BannerRecord {
  ${MODULE_BASE_FRAGMENT}
  id
  name
  ctaTrackerEvent
  ctaTarget
  ctaLink
  ctaLabel
  bannerContent
  icon {
    url
    responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800})  {
      ...responsiveImageFragment
    }
  }
}`;

export const howWeWorkV2ModuleFragment = `
... on ModuleHowWeWorkV2Record {
  ${MODULE_BASE_FRAGMENT}
  step {
    sectionName
    title
    description
    media {
      id
      url
      responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800}) {
        ...responsiveImageFragment
      }      
    }
  }
  cta {
    label
    url
    trackerEvent
  }
  desktopImage {
    url
    responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800}) {
      ...responsiveImageFragment
    }
  }
}
`;

export const whatWeTreatModuleFragment = `
... on ModuleWhatWeTreatRecord {
  ${MODULE_BASE_FRAGMENT}
  id
  subtitle
  title
  whatWeTreatStep {
    id
    title
    profileimage {
      id
      url
      responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800})  {
        ...responsiveImageFragment
      }
    }
  }
  whatWeTreatTestimonial {
    id
    heading
    subheading
  }
}`;

export const cardsListModuleFragment = `
  ... on ModuleCardsListRecord {
    ${MODULE_BASE_FRAGMENT}
    headline
    subtext
    layout {
      value
    }
    cardType {
      value
    }
    cardBackgroundColor {
      hex
    }
    cards {
      id
      overline
      title
      subtext
      ctaUrl
      ctaLabel
      ctaTrackerEvent
      image {
        id
        url
        responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800})  {
          ...responsiveImageFragment
        }
      }
    }
  }
`;

export const gridListModuleFragment = `
  ... on ModuleGridListRecord {
    ${MODULE_BASE_FRAGMENT}
    headline
    subtext
    cardType {
      value
    }
    cardBackgroundColor {
      hex
    }
    cards {
      id
      overline
      title
      subtext
      ctaUrl
      ctaLabel
      ctaTrackerEvent
      image {
        id
        url
        responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800})  {
          ...responsiveImageFragment
        }
      }
    }
  }
`;

export const storyModuleFragment = `
  ... on ModuleStoryRecord {
    ${MODULE_BASE_FRAGMENT}
    headline
    subtext
    ctaLabel
    ctaUrl
    ctaTrackerEvent
    layout
    media {
      id
      url
      responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800})  {
        ...responsiveImageFragment
      }
    }
  }
`;
export const modulePricingOtc = `
 ... on ModulePricingOtcRecord {
   ${MODULE_BASE_FRAGMENT}
  id
  captionRichtext {
    value
  }
  otcPricingItems {
    heading
    offer
    ctaLabel
    ctaLink
    oldPrice
    newPrice
    ctaTrackerEvent
    id
    firstColumn {
      value
    }
    secondColumn {
      value
    }
  }
}


`;
export const collapsableModuleFragment = `
  ... on ModuleCollapsableListRecord {
    ${MODULE_BASE_FRAGMENT}
    headline    
    subtext {
      value
    }
    filterSectionTitle
    layout {
      value
    }
    collapsableItems {
      id
      title
      text
      content {
        value
      }
      tags {
        id
        name
      }
    }
  }
`;
export const careersListingModuleFragment = `
  ... on ModuleCareersListingPlaceholderRecord {
    type: _modelApiKey
    id
    name
    headline
    subtext {
      value
    }
    filterSectionTitle
    loadingMessage
    errorMessage
  }
`;
export const wysiwygModuleFragment = `
  ... on ModuleWysiwygRecord {
    ${MODULE_BASE_FRAGMENT}
    id
    content {
      value
    }
  }
`;

export const formModuleFragment = `
  ... on ModuleFormRecord {
    ${MODULE_BASE_FRAGMENT}
    headline
    subtext
    submitButtonLabel
    successMessage
    errorMessage
    apiEndpointUrl
    ctaTrackerEvent
    layout {
      value
    }
    fieldGroup {
      name
      label
      validationMessage
      required
      width {
        value
      }
      fieldType {
        value
      }
      pattern
      invalidPatternMessage
      listValues
    }
  }
`;

export const mediaGalleryModuleFragment = `
  ... on ModuleMediaGalleryRecord {
    ${MODULE_BASE_FRAGMENT}
    mediasList {
      id
      name
      description
      media {
        url
        video {
          thumbnailUrl
          mp4Url
        }
        responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800})  {
          ...responsiveImageFragment
        }
      }
      videoThumbnail {
        url
        responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800})  {
          ...responsiveImageFragment
        }
      }
    }
  }
`;

export const textModuleFragment = `
  ... on ModuleTextRecord {
    ${MODULE_BASE_FRAGMENT}
    headline
    subtext
    ctaLabel
    ctaUrl
    ctaTrackerEvent
    invertTextColor
    backgroundImage {
      url
      responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800})  {
        ...responsiveImageFragment
      }
    }
    layout {
      value
    }
    textSize {
      value
    }
  }
`;

export const pricingModuleFragment = `
  ... on ModulePricingRecord {
    ${MODULE_BASE_FRAGMENT}
    headline
    descriptionHeadline
    descriptionList {
      description
    }
    pricingColumnsCount
    pricingList {
      id
      title
      initialPrice
      price
      ctaTrackerEvent
      ctaLabel
      ctaUrl
      caption
    }
    caption
  }
`;

export const newPricingModuleFragment = `
  ... on ModulePricingCopy1Record {
    ${MODULE_BASE_FRAGMENT}
    name
    headline
    pricingColumnsCount
    caption
    captionRichtext {
      value
    }
    pricingListNew {
      addOn {
        value
      }
      included {
        value
      }
     id
     title
     price
     initialPrice
     includedAndOptionalDetails
     ctaLabel
     ctaUrl
     ctaTrackerEvent
     caption
    }

  }
`;

export const offeringModuleFragment = `
  ... on ModuleOfferingRecord {
    ${MODULE_BASE_FRAGMENT}
    hero {
      title
      ctaLabel
      ctaUrl
      ctaTrackerEvent
      textColor {
        alpha
        blue
        green
        hex
        red
      }
      backgroundImage {
        alt
        url
        height
        width
        title
        size
        responsiveImage {
          alt
          bgColor
          height
          width
          sizes
          src
          srcSet
          title
        }
      }
    }
    offering {
      id
      title
      url
      trackerEvent
      overline
      description
      ctaVisible
      ctaLabel
      ctaUrl
      ctaTrackerEvent
      backgroundColor {
        alpha
        blue
        green
        hex
        red
      }
      icon {
        alt
        url
        height
        width
        title
        size
        responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800})  {
          ...responsiveImageFragment
        }       
      }
    }
  }
`;

export const externalSiteReferenceModuleFragment = `
  ... on ModuleExternalSiteReferenceRecord {
    ${MODULE_BASE_FRAGMENT}
    heading
    externalSite {
      url
      logo {
        id
        url
        responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800})  {
          ...responsiveImageFragment
        }      
      }
    }
  }
`;

const COMPARISON_SECTION_FRAGMENT = `
  id
  logo {
    url
    responsiveImage(imgixParams: {auto: format, q: 60, fit: max, w: 1800})  {
      ...responsiveImageFragment
    }
  }
  title
  price
  comparisonItems {
    id
    icon {
      url
    }
    content
  }
  backgroundColor {
    hex
  }
`;

export const comparisonModuleFragment = `
  ... on ModuleComparisonRecord {
    ${MODULE_BASE_FRAGMENT}
    reyVr {
      ${COMPARISON_SECTION_FRAGMENT}
    }
    traditionalTherapy {
      ${COMPARISON_SECTION_FRAGMENT}
    }
  }
`;
