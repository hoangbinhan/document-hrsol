import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Face ID',
    // imageUrl: 'static/img/hrs-icon-face-id.svg',
    description: (
      <>
        Hệ thống quét nhận diện khuôn mặt- trải nghiệm một trong những công nghệ 4.0 tiên tiến nhất hiện nay mà không cần sử dụng các thiết bị hỗ trợ khác

      </>
    ),
  },
  {
    title: 'QR Code',
    // imageUrl: 'static/img/hrs-icon-qrcode.svg',
    description: (
      <>
        Tích hợp chấm công trên nhiều thiết bị, mang lại sự tiện lợi với độ chính xác cao và tiết kiệm thời gian
      </>
    ),
  },
  {
    title: 'Cloud',
    // imageUrl: 'static/img/hrs-icon-cloud.svg',
    description: (
      <>
        Tất cả những dữ liệu và thông tin cá nhân của người dùng đều được lưu trữ vào điện toán đám mây - kho lưu trữ rộng lớn, giảm thiểu rủi ro đánh mất dữ liệu
      </>
    ),
  },
  {
    title: 'Workflow',
    // imageUrl: 'static/img/hrs-icon-workflow.svg',
    description: (
      <>
        Quản lý yêu cầu của nhân viên và phân quyền riêng biệt tạo thành một hệ thống công việc khép kín tuần hoàn và kết nối
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 style={{textAlign:'center'}}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/Login')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
