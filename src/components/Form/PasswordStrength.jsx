import React from 'react';
import zxcvbn from 'zxcvbn';

export const PasswordStrenght = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const progressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#F11C0B';
      case 1:
        return '#F1540B';
      case 2:
        return '#FAF00C';
      case 3:
        return '#3faf6f';
      case 4:
        return '#0CD534';
      default:
        return 'none';
    }
  };

  // const createPasswordLabel = () => {
  //   switch (testResult.score) {
  //     case 0:
  //       return '';
  //     case 1:
  //       return 'weak';
  //     case 2:
  //       return 'okay';
  //     case 3:
  //       return 'good';
  //     case 4:
  //       return 'strong';
  //     default:
  //       return '';
  //   }
  // };

  const changeProgressStyle = () => ({
    width: '100%',
    height: '4px',
    marginTop: '0',
    background: 'var(--light-gray)',
  });

  const changePasswordColor = () => ({
    width: `${num}%`,
    height: '4px',
    background: progressColor(),
    borderRadius: '4px',
  });

  return (
    <>
      <div className="progress" style={changeProgressStyle()}>
        <div className="progress_bar" style={changePasswordColor()}></div>
      </div>
      <p className="text_pr" style={{ color: progressColor() }}></p>
    </>
  );
};
