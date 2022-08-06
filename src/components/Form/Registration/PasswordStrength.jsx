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
        return '#f8eb00';
      case 3:
        return '#0a9d6e';
      case 4:
        return '#00b445';
      default:
        return 'none';
    }
  };

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
