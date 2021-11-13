import HeroModule from '../Modules/HeroModule';
export interface ModularComponentProps {
  module: any;
}
const ModularComponent: React.FC<ModularComponentProps> = ({ module }) => {
  let component;
  switch (module.type) {
    case 'module_wysiwyg':
      component = <div />;
      break;
    case 'module_cards_list':
      component = <div />;

      break;
    case 'module_pricing':
      component = <div />;
      break;
    case 'module_pricing_copy1':
      component = <div />;
    case 'module_grid_list':
      component = <div />;
      break;
    case 'module_form':
      component = <div />;
    case 'module_careers_listing_placeholder':
      component = <div />;
      break;
    case 'module_collapsable_list':
      component = <div />;
      break;
    case 'module_hero':
      component = <HeroModule {...module} />;
      break;
    case 'module_media_gallery':
      component = <div />;
      break;
    case 'module_story':
      component = <div />;
      break;
    case 'module_text':
      component = <div />;
      break;
    case 'module_how_we_work':
      component = <div />;
      break;
    case 'module_how_we_work_v2':
      component = <div />;
      break;
    case 'module_offering':
      component = <div />;
      break;
    case 'module_external_site_reference':
      component = <div />;
      break;
    case 'module_what_we_treat':
      component = <div />;
      break;
    case 'banner':
      component = <div />;
      break;
    case 'module_comparison':
      component = <div />;
      break;
    case 'module_pricing_otc':
      component = <div />;
      break;
    default:
      component = <></>;
      break;
  }
  return component;
};

export default ModularComponent;
