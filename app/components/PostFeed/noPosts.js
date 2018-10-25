import React from 'react';
import FormattedMessage from 'react-intl/src/components/message';
import messages from './messages';

export default function noPosts() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}
