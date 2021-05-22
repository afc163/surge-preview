import React, { useEffect, useState } from 'react';
import Gallery from './gallery';
import './App.css';

const EnvUrls = {
  online: 'https://unpkg.com/@antv/g2plot@latest',
  local: '/g2plot.min.js',
};

const getFormateDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month > 9 ? month : '0' + month}-${
    day > 9 ? day : '0' + day
  }`;
};

const App: React.FC = () => {
  const [laoding, setLoading] = useState(true);
  const [showDiff, setShowDiff] = useState(false);
  const createScripts = (type: string) => {
    const exist = document.getElementById('dynamic-scripts');
    if (exist) {
      exist.parentNode?.removeChild(exist);
    }
    // 动态创建 script
    let script = document.createElement('script');
    script.src = type === 'local' ? EnvUrls.local : EnvUrls.online;
    script.id = 'dynamic-scripts';
    script.onload = function () {
      setLoading(false);
      // @ts-ignore
      window.g2pot = G2Plot;
    };
    document.getElementsByTagName('body')[0].appendChild(script);
  };
  const getParams = () => {
    const param = window.location.search.split('?')[1]?.split('&') || [];
    const params: { [key: string]: string } = {};
    param.forEach((item: string) => {
      const [key, value] = item.split('=');
      params[key] = value;
    });
    return params.type;
  };
  useEffect(() => {
    // 查看 diff 结果
    const type = getParams();
    if (type === 'diff') {
      setLoading(false);
      setShowDiff(true);
    } else {
      createScripts(type);
    }
  }, []);

  if (laoding) {
    return <div className="loading">脚本加载中</div>;
  }

  if (showDiff) {
    const basePath = `/file/${getFormateDate()}`;
    return (
      <div className="diff-box">
        <img src={`${basePath}/local.png`} alt="local" />
        <img src={`${basePath}/diff.png`} alt="diff" />
        <img src={`${basePath}/online.png`} alt="online" />
      </div>
    );
  }

  return <Gallery />;
};

export default App;
