import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './about.module.css';

const teamMembers = [
  // Faculty
  {
    name: 'Pengfei Liu',
    role: 'Director',
    avatar: useBaseUrl('/img/team/pengfei.jpg')
  },
  // Current Students (ordered by when they joined)
  {
    name: 'I-Chun Chern',
    role: 'PhD@SJTU',
    avatar: useBaseUrl('/img/team/ethan.jpg')
  },
  {
    name: 'Steffi Chern',
    role: 'Undergrad@CMU',
    avatar: useBaseUrl('/img/team/steffi.png')
  },
  {
    name: 'Shijie Xia',
    role: 'Incoming Ph.D',
    avatar: useBaseUrl('/img/team/shijie.jpg')
  },
  {
    name: 'Xuefeng Li',
    role: 'Incoming Ph.D',
    avatar: useBaseUrl('/img/team/xuefeng.png')
  },
  {
    name: 'Haoyang Zou',
    role: 'Undergrad@Fudan',
    avatar: useBaseUrl('/img/team/haoyang.png')
  },
  {
    name: 'Zengzhi Wang',
    role: 'PhD@SJTU',
    avatar: useBaseUrl('/img/team/zengzhiwang.png')
  },
  {
    name: 'Runze Fan',
    role: 'Master@CAS',
    avatar: useBaseUrl('/img/team/runzefan.png')
  },
  {
    name: 'Yan Ma',
    role: 'PhD',
    avatar: useBaseUrl('/img/team/mayan.jpg')
  },
  {
    name: 'Yiyuan Li',
    role: 'PhD@UNC',
    avatar: useBaseUrl('/img/team/yiyuan.png')
  },
  {
    name: 'Fan Zhou',
    role: 'Master@SJTU',
    avatar: useBaseUrl('/img/team/fan.png')
  },
  {
    name: 'Ting Wu',
    role: 'RA@GAIR',
    avatar: useBaseUrl('/img/team/tingwu.png')
  },
  {
    name: 'Huanyu Li',
    role: 'Undergrad@SJTU',
    avatar: useBaseUrl('/img/team/huanyu2.png')
  },
  {
    name: 'Yixiu Liu',
    role: 'Master@SJTU',
    avatar: useBaseUrl('/img/team/yixiu.png')
  },
  {
    name: 'Yuxiang Zheng',
    role: 'Master@SJTU',
    avatar: useBaseUrl('/img/team/yuxiang.png')
  },
  {
    name: 'Jiadi Su',
    role: 'PhD@FDU',
    avatar: useBaseUrl('/img/team/jiadi.png')
  },
  {
    name: 'Yang Xiao',
    role: 'PhD@PolyU',
    avatar: useBaseUrl('/img/team/xiaoyang.jpg')
  },
  {
    name: 'Yiwei Qin',
    role: 'Master@CMU',
    avatar: useBaseUrl('/img/team/yiwei.jpg')
  },
  {
    name: 'Ruijie Xu',
    role: 'Undergrad@SJTU',
    avatar: useBaseUrl('/img/team/ruijie2.png')
  },
  {
    name: 'Zhen Huang',
    role: 'Undergrad@SUDA',
    avatar: useBaseUrl('/img/team/huangzhen.png')
  },
  {
    name: 'Yixin Ye',
    role: 'Undergrad@SJTU',
    avatar: useBaseUrl('/img/team/yeyixin.jpg')
  },
  {
    name: 'Zhulin Hu',
    role: 'Undergrad@SJTU',
    avatar: useBaseUrl('/img/team/zhulin.jpg')
  },
  {
    name: 'Pengrui Lu',
    role: 'Undergrad@SJTU',
    avatar: useBaseUrl('/img/team/pengrui.jpg')
  },
  {
    name: 'Yanheng He',
    role: 'Undergrad@SJTU',
    avatar: useBaseUrl('/img/team/yanheng.jpg')
  },
  {
    name: 'Jiahe Jin',
    role: 'Undergrad@SJTU',
    avatar: useBaseUrl('/img/team/jiahe.jpg')
  },
  {
    name: 'Dayuan Fu',
    role: 'Master@BUPT',
    avatar: useBaseUrl('/img/team/dayuan.jpg')
  },
  {
    name: 'Tianze Xu',
    role: 'Undergrad@BUPT',
    avatar: useBaseUrl('/img/team/tianze.png')
  },
  {
    name: 'Tiantian Mi',
    role: 'Incoming PhD @ Fudan',
    avatar: useBaseUrl('/img/team/tiantian.jpg')
  },
  {
    name: 'Lvmanshan Ye',
    role: 'Master@SJTU',
    avatar: useBaseUrl('/img/team/yelv.jpg')
  },
  {
    name: 'Xiaojie Cai',
    role: 'Master@SJTU',
    avatar: useBaseUrl('/img/team/xiaojie.jpg')
  },
  {
    name: 'Xiangkun Hu',
    role: 'SII',
    avatar: useBaseUrl('/img/team/xiangkun.png')
  },
  {
    name: 'Yang Nan',
    role: 'Undergrad@Fudan',
    avatar: useBaseUrl('/img/team/nanyang.jpg')
  },
  {
    name: 'Ji Zeng',
    role: 'Undergrad@SJTU',
    avatar: useBaseUrl('/img/team/ji_zeng.jpg')
  },
  {
    name: 'Hanning Wang',
    role: 'Undergrad@SJTU',
    avatar: useBaseUrl('/img/team/hanning.jpg')
  },
  {
    name: 'Weixian Xu',
    role: 'Undergrad@SJTU',
    avatar: useBaseUrl('/img/team/weixian.jpg')
  },
  {
    name: 'Qishuo Hua',
    role: 'Undergrad@SJTU',
    avatar: useBaseUrl('/img/team/qishuo.jpg')
  },
  {
    name: 'Yumin Zhuang',
    role: 'Undergrad@SJTU',
    avatar: useBaseUrl('/img/team/yumin.png')
  }
];

export default function About() {
  return (
    <Layout
      title="About ASI4AI"
      description="Learn about our team and mission to advance artificial intelligence for the benefit of humanity">
      <div className={styles.aboutPage}>
        <div className={styles.heroSection}>
          <div className={styles.container}>
            <Heading as="h1" className={styles.pageTitle}>
              About
            </Heading>
            <p className={styles.pageSubtitle}>
              Our mission to advance artificial intelligence for the benefit of humanity
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.contentSection}>
            <div className={styles.missionSection}>
              <Heading as="h2" className={styles.sectionTitle}>
                Our Mission
              </Heading>
              <p className={styles.missionText}>
                ASI4AI is dedicated to building Artificial Superintelligence (ASI) that accelerates the development of AI itself. Our mission is to ignite the intelligence explosion: a self-reinforcing cycle where AI recursively improves its own capabilities, transforming the pace of scientific discovery from a linear crawl to exponential growth.
              </p>
              <p className={styles.missionText}>
                We believe the future of AI is a symbiotic partnership between humans and superintelligent systems. By combining autonomous AI discovery with human guidance and validation, we aim to create a new era of research where breakthroughs in medicine, science, and technology are achieved at unprecedented speed and scale.
              </p>
            </div>

            <div className={styles.visionSection}>
              <Heading as="h2" className={styles.sectionTitle}>
                Our Vision
              </Heading>
              <p className={styles.visionText}>
                We envision a world where ASI acts as its own research engine, designing and building ever more capable versions of itself. This intelligence explosion will be guided by human values and oversight, ensuring that the benefits of superintelligence are safe, aligned, and broadly distributed. Our goal is to compress decades of progress into years, unlocking discoveries that expand the frontiers of human knowledge.
              </p>
            </div>

            <div className={styles.teamSection}>
              <Heading as="h2" className={styles.sectionTitle}>
                Our Team
              </Heading>
              <p className={styles.teamIntro}>
                Our team is composed of talented students and scientists, working together to advance ASI4AI.
              </p>
              
              <div className={styles.teamGrid}>
                {teamMembers.map((member, index) => (
                  <div key={index} className={styles.teamMember}>
                    <div className={styles.memberPhoto}>
                      {member.avatar ? (
                        <img 
                          src={member.avatar} 
                          alt={member.name}
                          className={styles.memberAvatar}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className={styles.photoPlaceholder} style={{display: member.avatar ? 'none' : 'flex'}}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className={styles.memberInfo}>
                      <h3 className={styles.memberName}>{member.name}</h3>
                      <p className={styles.memberRole}>{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 