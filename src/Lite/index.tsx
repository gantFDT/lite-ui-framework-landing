import React, { useEffect } from 'react'
import { Button, Icon, notification, Row, Col } from 'antd'
import classnames from 'classnames'
import Prism from 'prismjs'
Prism.highlightAll()

import Header from './Header'
import Banner from './Banner'
import Block from './Block'
import Footer from './Footer'

import bannerImg from './images/bannerimg.png'
import formImg from './images/form.png'
import tableImg from './images/table.png'
import themeImg from './images/theme.png'
import layerImg from './images/layer.png'
import globalImg from './images/global.png'
import dashboardImg from './images/dashboard.png'
import Player from 'griffith'

const sources = {
  hd: {
    play_url: 'http://data.yiheyishun.com/lite.mp4',
  }
}



import Code from './Code'

import SchemaFormDemo from './SchemaFormDemo'
import DataCellDemo from './DataCellDemo'
import SmartTableDemo from './SmartTableDemo'

const span = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
  xl: 24,
  xxl: 24
}

const Page = (props: any) => {

  useEffect(() => {
    notification.open({
      message: `欢迎`,
      description:
        <>欢迎使用, 如果帮助到了你，请麻烦给个star,谢谢 🙏</>,
      placement: "bottomRight",
      duration: 0,
    });
  }, []);


  return (
    <div className="home-page" style={{
      backgroundImage: 'linear-gradient(-135deg, #ffb307 0%, #ff8d00 100%)',
      backgroundSize: '100% 100vh',
      backgroundRepeat: 'no-repeat'
    }}>
      <Header key="header" />


      <Banner id="banner" key="banner"
        style={{ height: 'calc(100vh - 61px)', color: '#000' }}
        img={bannerImg}
        imageAlign='left'
        content={<>
          <div className="title">
            Lite UI Framework
          </div>
          <div className="content">
            <div>Lite UI Framework是一个基于ant pro定制的一个轻量级快速开发方案</div>

          </div>
          <Button size="large" className="gant-margin-v-20" href="http://favori.gitee.io/lite-ui-framework/" target="_blank">预览</Button>
          <Button size="large" className={classnames('gant-margin-v-20', 'gant-margin-h-20')} href="http://github.com/gantFDT/lite-ui-framework" target="_blank"><Icon type="github" /> github</Button>
        </>}
      />











      <Block
        title="特性"
        style={{ background: 'rgba(128,128,128,0.03)' }}
        data={[{
          img: dashboardImg,
          title: '自由定制Dashboard',
          content: '基于Widget体系实现自由布局定制多个Dashboard'
        }, {
          img: tableImg,
          title: '智能表格模板',
          content: '基于smartTable实现的快速增删改查页面模板'
        }, {
          img: formImg,
          title: '智能详情模板',
          content: '基于收敛的容器组件和schema-form实现的快速读写详情页面模板'
        }, {
          img: themeImg,
          title: '自定义主题',
          content: '基于css var 实现的非常灵活的自定义主题'
        }, {
          img: layerImg,
          title: '分模块开发',
          content: '简化路由编写，基于路由拆分和前置路由汇总、gitsubmodule和软连接实现不同团队的分模块开发'
        }, {
          img: globalImg,
          title: '一键国际化',
          content: '可基于百度翻译一句命令生成国际化字典'
        }]}
        span={2}
        extra={
          <div className="full-width" style={{ maxWidth: 1000, marginTop: 50, marginBottom: 50 }}>
            <div className='player'>
              <Player sources={sources} />
            </div>
          </div>
        }
      />




      <div className="title" style={{ marginTop: 50, textAlign: 'center' }}>
        开始使用
      </div>

      <div className="description" style={{ textAlign: 'center' }}>
        命令行运行下列命令，快速启动开发服务：
      </div>

      <div className="full-width" style={{ maxWidth: 1000, marginTop: 50, marginBottom: 50 }}>
        <Row>

          <Col {...span}>
            <pre className="language-bash">
              <code >
                {Code.start}
              </code>
            </pre>
          </Col>
        </Row>
      </div>


      <Footer />

    </div>
  );
}

export default Page;
