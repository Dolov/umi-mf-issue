import React from 'react'
import styles from './index.less';
import Button from '../components/Button'

// @ts-ignore
const RemoteButton = React.lazy(() => import('umiapp2/Button'))

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button />
      <React.Suspense fallback='loading'>
				<RemoteButton />
			</React.Suspense>
    </div>
  );
}
