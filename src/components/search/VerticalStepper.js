import React from 'react';
import { Icon, Step } from 'semantic-ui-react';
import { MENU } from '../../constant';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  selectProcessor,
  selectRam,
  selectStorage,
  selectSSD,
  selectGPUBrand,
  selectGPUVersion,
  selectBrand,
} from '../../actions';

const VerticalStepper = ({
  activeMenu,
  handleMenuClick,
  price,
  app,
  ...props
}) => {
  const formatCurrency = value => {
    return value === 21000000
      ? 'Rp 20.000.000++'
      : `Rp. ${value.toLocaleString('en').replace(/,/g, '.')}`;
  };

  const getSelectedSpec = key => {
    let description;

    if (key === 'Processor') description = app.processor.sort().join(', ');
    if (key === 'Ram') description = app.ram.sort().join(', ');
    if (key === 'GPU' && app.vgaBrand.length)
      description = `${app.vgaBrand}${
        app.vgaVersion.length ? ':' : ''
      } ${app.vgaVersion.sort().join(', ')}`;
    if (key === 'Storage')
      description = `${app.storage.sort().join(', ')}${app.ssd ? ', ssd' : ''}`;
    if (key === 'Brand') description = app.brand.sort().join(', ');
    if (key === 'Price') description = price ? formatCurrency(price) : '';

    return (
      <React.Fragment>
        {description}
        {description && <Icon name="close" onClick={handleClear} />}
      </React.Fragment>
    );
  };

  const handleClear = () => {
    const {
      selectProcessor,
      selectRam,
      selectStorage,
      selectSSD,
      selectGPUBrand,
      selectGPUVersion,
      selectBrand,
    } = props;

    if (activeMenu === 'Processor') {
      selectProcessor([]);
    } else if (activeMenu === 'Ram') {
      selectRam([]);
    } else if (activeMenu === 'GPU') {
      selectGPUVersion([]);
      selectGPUBrand([]);
    } else if (activeMenu === 'Storage') {
      selectStorage([]);
      selectSSD(false);
    } else if (activeMenu === 'Brand') {
      selectBrand([]);
    } else if (activeMenu === 'Price') {
      window.sessionStorage.setItem('maxPrice', 0);
      props.handlePriceChange(0);
    }
  };

  const renderStepMenus = () =>
    MENU.map(({ title, icon, key }) => (
      <Step active={key === activeMenu} onClick={handleMenuClick(key)}>
        <Icon name={icon} />
        <Step.Content>
          <Step.Title>{title}</Step.Title>
          <Step.Description>{getSelectedSpec(key)}</Step.Description>
        </Step.Content>
      </Step>
    ));

  return (
    <Step.Group vertical fluid>
      {renderStepMenus()}
    </Step.Group>
  );
};

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectProcessor,
      selectRam,
      selectStorage,
      selectSSD,
      selectGPUBrand,
      selectGPUVersion,
      selectBrand,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(VerticalStepper);
