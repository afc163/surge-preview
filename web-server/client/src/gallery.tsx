import React, { Fragment, useEffect, useRef } from 'react';
import { codes } from './code';

const execute = (code: string, node: HTMLDivElement) => {
  const script = document.createElement('script');
  script.innerHTML = `
    try {
      ${code}
    } catch(e) {
      console.error(e);
    }
  `;
  node.appendChild(script);
};

const PlayGround: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    codes.forEach((item) => {
      execute(
        item.code
          .replace(/\(\*\*\)/g, '`')
          .replace(/s1(\S*)s1/g, (_, sign: string) => {
            return '${' + sign + '}';
          }),
        document.querySelector(`#box-${item.fileIndex}`) as HTMLDivElement
      );
    });
  }, []);

  return (
    <Fragment>
      <div
        className="charts-container"
        data-length={codes.length}
        ref={containerRef}
      >
        {codes.map((item) => (
          <div
            key={item.fileName + item.fileIndex}
            id={`box-${item.fileIndex}`}
          >
            <div id={`container-${item.fileIndex}`}></div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

class ErrorHandlerPlayGround extends React.Component {
  state = {
    error: undefined,
  };

  static getDerivedStateFromError(error: Error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { error };
  }

  render() {
    const { error } = this.state;
    if (error) {
      // 你可以自定义降级后的 UI 并渲染
    }
    return <PlayGround {...this.props} />;
  }
}

// export default ErrorHandlerPlayGround;
export default ErrorHandlerPlayGround;
