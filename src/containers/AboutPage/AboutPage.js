import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Saunatime',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>You drive heavy equipment.
          <br></br>
          You shouldn't have to do the heavy lifting.</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Did you know that there are 120,000 dump trucks on the road today? It's a $17 billion industry!</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Waiting for your phone to ring? There's a better way to keep your truck on the road.
              </h2>
              <p>
                Let us do the heavy lifting for you. Contractors are always in need of trucks like yours.
                They'll post jobs to our marketplace with the details and materials they need, and you
                can sort, filter, and browse the list to find exactly what you're looking for.
              </p>
              <h3 className={css.subtitle}>Are you a trucking company?</h3>

              <p>
                We're all about efficiency at Truck Connection. Keep your trucks on the road and keep their
                routes efficient. Our listings can be searched and filtered to give you total control over
                your trucks.
              </p>


            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
