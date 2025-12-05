import React from 'react';
import styles from './app.module.css';
// Import components - CSS is automatically included via their index.ts files
import { Button as ButtonVanillaExtract } from '@centrodphlibs/button-vanilla-extract';
import { Button as ButtonLinaria } from '@centrodphlibs/button-linaria';
import { Button as ButtonCssModules } from '@centrodphlibs/button-css-modules';

export function App() {
  return (
    <>

      {/* Button Showcase Section */}
      <div className={styles['button-showcase']}>
        <h2 className={styles['showcase-title']}>Button Components Showcase</h2>

        {/* Vanilla Extract Showcase */}
        <div className={styles['showcase-section']}>
          <h3 className={styles['section-title']}>Vanilla Extract Styling</h3>
          <p className={styles['section-description']}>
            Type-safe, zero-runtime CSS-in-TypeScript
          </p>
          <div className={styles['button-group']}>
            <ButtonVanillaExtract variant="primary" size="small">
              Primary Small
            </ButtonVanillaExtract>
            <ButtonVanillaExtract variant="primary" size="medium">
              Primary Medium
            </ButtonVanillaExtract>
            <ButtonVanillaExtract variant="primary" size="large">
              Primary Large
            </ButtonVanillaExtract>
            <ButtonVanillaExtract variant="secondary">
              Secondary
            </ButtonVanillaExtract>
            <ButtonVanillaExtract variant="outline">
              Outline
            </ButtonVanillaExtract>
            <ButtonVanillaExtract variant="ghost">Ghost</ButtonVanillaExtract>
            <ButtonVanillaExtract variant="primary" disabled>
              Disabled
            </ButtonVanillaExtract>
          </div>
        </div>

        {/* Linaria Showcase */}
        <div className={styles['showcase-section']}>
          <h3 className={styles['section-title']}>Linaria Styling</h3>
          <p className={styles['section-description']}>
            Zero-runtime CSS-in-JS with compile-time extraction
          </p>
          <div className={styles['button-group']}>
            <ButtonLinaria variant="primary" size="small">
              Primary Small
            </ButtonLinaria>
            <ButtonLinaria variant="primary" size="medium">
              Primary Medium
            </ButtonLinaria>
            <ButtonLinaria variant="primary" size="large">
              Primary Large
            </ButtonLinaria>
            <ButtonLinaria variant="secondary">Secondary</ButtonLinaria>
            <ButtonLinaria variant="outline">Outline</ButtonLinaria>
            <ButtonLinaria variant="ghost">Ghost</ButtonLinaria>
            <ButtonLinaria variant="primary" disabled>
              Disabled
            </ButtonLinaria>
          </div>
        </div>

        {/* CSS Modules Showcase */}
        <div className={styles['showcase-section']}>
          <h3 className={styles['section-title']}>CSS Modules Styling</h3>
          <p className={styles['section-description']}>
            Traditional CSS modules with scoped styling
          </p>
          <div className={styles['button-group']}>
            <ButtonCssModules variant="primary" size="small">
              Primary Small
            </ButtonCssModules>
            <ButtonCssModules variant="primary" size="medium">
              Primary Medium
            </ButtonCssModules>
            <ButtonCssModules variant="primary" size="large">
              Primary Large
            </ButtonCssModules>
            <ButtonCssModules variant="secondary">Secondary</ButtonCssModules>
            <ButtonCssModules variant="outline">Outline</ButtonCssModules>
            <ButtonCssModules variant="ghost">Ghost</ButtonCssModules>
            <ButtonCssModules variant="primary" disabled>
              Disabled
            </ButtonCssModules>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
