// @flow strict
import * as React from 'react';

import {} from 'components/authentication'; // Bind all authentication plugins
import GettingStarted from 'components/authentication/BackendCreate/GettingStarted';
import { DocumentTitle, PageHeader } from 'components/common';
import { useActiveBackend } from 'components/authentication/hooks';
import DocsHelper from 'util/DocsHelper';
import DocumentationLink from 'components/support/DocumentationLink';
import BackendOverviewLinks from 'components/authentication/BackendOverviewLinks';

const AuthenticationCreatePage = () => {
  const { finishedLoading, activeBackend } = useActiveBackend();

  return (
    <DocumentTitle title="Create Authentication Service">
      <PageHeader title="Create Authentication Service">
        <span>Configure Graylog&apos;s authentication services of this Graylog cluster.</span>
        <span>Read more authentication in the <DocumentationLink page={DocsHelper.PAGES.USERS_ROLES}
                                                                 text="documentation" />.
        </span>
        <BackendOverviewLinks activeBackend={activeBackend} finishedLoading={finishedLoading} />
      </PageHeader>

      <GettingStarted title="Create New Authentication Service" />
    </DocumentTitle>
  );
};

export default AuthenticationCreatePage;
