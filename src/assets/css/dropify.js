import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  fontFace: {
    fontFamily: 'dropify',
    src: 'url(../fonts/dropify/dropify.eot)',
    src: 'url(../fonts/dropify/dropify.eot) format("embedded-opentype"), url(../fonts/dropify/dropify.woff) format("woff"), url(../fonts/dropify/dropify.ttf) format("truetype"), url(../fonts/dropify/dropify.svg#dropify) format("svg")',
    fontWeight: '400',
    fontStyle: 'normal'
  },
  'dropify-font:before': {
    fontFamily: 'dropify',
    fontStyle: 'normal',
    fontWeight: '400',
    speak: 'none',
    display: 'inline-block',
    textDecoration: 'inherit',
    width: [{ unit: 'em', value: 1 }],
    marginLeft: [{ unit: 'em', value: 0.2 }],
    marginRight: [{ unit: 'em', value: 0.2 }],
    textAlign: 'center',
    fontVariant: 'normal',
    textTransform: 'none',
    lineHeight: [{ unit: 'em', value: 1 }]
  },
  'dropify-wrapper dropify-message spanfile-icon:before': {
    fontFamily: 'dropify',
    fontStyle: 'normal',
    fontWeight: '400',
    speak: 'none',
    display: 'inline-block',
    textDecoration: 'inherit',
    width: [{ unit: 'em', value: 1 }],
    marginLeft: [{ unit: 'em', value: 0.2 }],
    marginRight: [{ unit: 'em', value: 0.2 }],
    textAlign: 'center',
    fontVariant: 'normal',
    textTransform: 'none',
    lineHeight: [{ unit: 'em', value: 1 }]
  },
  'dropify-wrapper dropify-preview dropify-infos dropify-infos-inner pdropify-filename spanfile-icon:before': {
    fontFamily: 'dropify',
    fontStyle: 'normal',
    fontWeight: '400',
    speak: 'none',
    display: 'inline-block',
    textDecoration: 'inherit',
    width: [{ unit: 'em', value: 1 }],
    marginLeft: [{ unit: 'em', value: 0.2 }],
    marginRight: [{ unit: 'em', value: 0.2 }],
    textAlign: 'center',
    fontVariant: 'normal',
    textTransform: 'none',
    lineHeight: [{ unit: 'em', value: 1 }]
  },
  '[class*=" dropify-font-"]:before': {
    fontFamily: 'dropify',
    fontStyle: 'normal',
    fontWeight: '400',
    speak: 'none',
    display: 'inline-block',
    textDecoration: 'inherit',
    width: [{ unit: 'em', value: 1 }],
    marginLeft: [{ unit: 'em', value: 0.2 }],
    marginRight: [{ unit: 'em', value: 0.2 }],
    textAlign: 'center',
    fontVariant: 'normal',
    textTransform: 'none',
    lineHeight: [{ unit: 'em', value: 1 }]
  },
  '[class^=dropify-font-]:before': {
    fontFamily: 'dropify',
    fontStyle: 'normal',
    fontWeight: '400',
    speak: 'none',
    display: 'inline-block',
    textDecoration: 'inherit',
    width: [{ unit: 'em', value: 1 }],
    marginLeft: [{ unit: 'em', value: 0.2 }],
    marginRight: [{ unit: 'em', value: 0.2 }],
    textAlign: 'center',
    fontVariant: 'normal',
    textTransform: 'none',
    lineHeight: [{ unit: 'em', value: 1 }]
  },
  'dropify-wrapper': {
    fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial'
  },
  'dropify-wrapper dropify-clear': {
    fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial'
  },
  'dropify-wrapperhas-error dropify-message dropify-error': {
    display: 'block'
  },
  'dropify-wrapperhas-preview dropify-clear': {
    display: 'block'
  },
  'dropify-font-upload:before': {
    content: ''\e800''
  },
  'dropify-wrapper dropify-message spanfile-icon:before': {
    content: ''\e800''
  },
  'dropify-font-file:before': {
    content: ''\e801''
  },
  'dropify-wrapper': {
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    width: [{ unit: '%H', value: 1 }],
    maxWidth: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 200 }],
    padding: [{ unit: 'px', value: 5 }, { unit: 'px', value: 10 }, { unit: 'px', value: 5 }, { unit: 'px', value: 10 }],
    fontSize: [{ unit: 'px', value: 14 }],
    lineHeight: [{ unit: 'px', value: 22 }],
    color: '#777',
    backgroundColor: '#FFF',
    backgroundImage: 'none',
    textAlign: 'center',
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#E5E5E5' }],
    WebkitTransition: 'border-color .15s linear',
    transition: 'border-color .15s linear'
  },
  'dropify-wrapper:hover': {
    backgroundSize: '30px 30px',
    backgroundImage: '-webkit-linear-gradient(135deg, #F6F6F6 25%, transparent 25%, transparent 50%, #F6F6F6 50%, #F6F6F6 75%, transparent 75%, transparent)',
    backgroundImage: 'linear-gradient(-45deg, #F6F6F6 25%, transparent 25%, transparent 50%, #F6F6F6 50%, #F6F6F6 75%, transparent 75%, transparent)',
    WebkitAnimation: 'stripes 2s linear infinite',
    animation: 'stripes 2s linear infinite'
  },
  'dropify-wrapperhas-error': {
    borderColor: '#F34141'
  },
  'dropify-wrapperhas-error:hover dropify-errors-container': {
    visibility: 'visible',
    opacity: '1',
    WebkitTransitionDelay: '0s',
    transitionDelay: '0s'
  },
  'dropify-wrapperdisabled input': {
    cursor: 'not-allowed'
  },
  'dropify-wrapperdisabled:hover': {
    backgroundImage: 'none',
    WebkitAnimation: 'none',
    animation: 'none'
  },
  'dropify-wrapperdisabled dropify-message': {
    opacity: '.5',
    textDecoration: 'line-through'
  },
  'dropify-wrapperdisabled dropify-infos-message': {
    display: 'none'
  },
  'dropify-wrapper input': {
    position: 'absolute',
    top: [{ unit: 'px', value: 0 }],
    right: [{ unit: 'px', value: 0 }],
    bottom: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    height: [{ unit: '%V', value: 1 }],
    width: [{ unit: '%H', value: 1 }],
    opacity: '0',
    cursor: 'pointer',
    zIndex: '5'
  },
  'dropify-wrapper dropify-message': {
    position: 'relative',
    top: [{ unit: '%V', value: 0.5 }],
    WebkitTransform: 'translateY(-50%)',
    transform: 'translateY(-50%)'
  },
  'dropify-wrapper dropify-message spanfile-icon': {
    fontSize: [{ unit: 'px', value: 50 }],
    color: '#CCC'
  },
  'dropify-wrapper dropify-message p': {
    margin: [{ unit: 'px', value: 5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'dropify-wrapper dropify-message pdropify-error': {
    color: '#F34141',
    fontWeight: '700',
    display: 'none'
  },
  'dropify-wrapper dropify-clear': {
    display: 'none',
    position: 'absolute',
    opacity: '0',
    zIndex: '7',
    top: [{ unit: 'px', value: 10 }],
    right: [{ unit: 'px', value: 10 }],
    background: '0 0',
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#FFF' }],
    textTransform: 'uppercase',
    fontSize: [{ unit: 'px', value: 11 }],
    padding: [{ unit: 'px', value: 4 }, { unit: 'px', value: 8 }, { unit: 'px', value: 4 }, { unit: 'px', value: 8 }],
    fontWeight: '700',
    color: '#FFF',
    WebkitTransition: 'all .15s linear',
    transition: 'all .15s linear'
  },
  'dropify-wrapper dropify-clear:hover': {
    background: 'rgba(255, 255, 255, .2)'
  },
  'dropify-wrapper dropify-preview': {
    display: 'none',
    position: 'absolute',
    zIndex: '1',
    backgroundColor: '#FFF',
    padding: [{ unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }],
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }],
    top: [{ unit: 'px', value: 0 }],
    right: [{ unit: 'px', value: 0 }],
    bottom: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    overflow: 'hidden',
    textAlign: 'center'
  },
  'dropify-wrapper dropify-preview dropify-render img': {
    top: [{ unit: '%V', value: 0.5 }],
    WebkitTransform: 'translate(0, -50%)',
    transform: 'translate(0, -50%)',
    position: 'relative',
    maxWidth: [{ unit: '%H', value: 1 }],
    maxHeight: [{ unit: '%V', value: 1 }],
    backgroundColor: '#FFF',
    WebkitTransition: 'border-color .15s linear',
    transition: 'border-color .15s linear'
  },
  'dropify-wrapper dropify-preview dropify-render i': {
    fontSize: [{ unit: 'px', value: 70 }],
    top: [{ unit: '%V', value: 0.5 }],
    left: [{ unit: '%H', value: 0.5 }],
    WebkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    color: '#777'
  },
  'dropify-wrapper dropify-preview dropify-render dropify-extension': {
    position: 'absolute',
    top: [{ unit: '%V', value: 0.5 }],
    left: [{ unit: '%H', value: 0.5 }],
    WebkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    marginTop: [{ unit: 'px', value: 10 }],
    textTransform: 'uppercase',
    fontWeight: '900',
    letterSpacing: [{ unit: 'em', value: -0.03 }],
    fontSize: [{ unit: 'px', value: 13 }],
    width: [{ unit: 'px', value: 42 }],
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  'dropify-wrapper dropify-preview dropify-infos': {
    position: 'absolute',
    left: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 0 }],
    right: [{ unit: 'px', value: 0 }],
    bottom: [{ unit: 'px', value: 0 }],
    zIndex: '3',
    background: 'rgba(0, 0, 0, .7)',
    opacity: '0',
    WebkitTransition: 'opacity .15s linear',
    transition: 'opacity .15s linear'
  },
  'dropify-wrapper dropify-preview dropify-infos dropify-infos-inner': {
    position: 'absolute',
    top: [{ unit: '%V', value: 0.5 }],
    WebkitTransform: 'translate(0, -40%)',
    transform: 'translate(0, -40%)',
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    width: [{ unit: '%H', value: 1 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }],
    WebkitTransition: 'all .2s ease',
    transition: 'all .2s ease'
  },
  'dropify-wrapper dropify-preview dropify-infos dropify-infos-inner p': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'relative',
    width: [{ unit: '%H', value: 1 }],
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#FFF',
    textAlign: 'center',
    lineHeight: [{ unit: 'px', value: 25 }],
    fontWeight: '700'
  },
  'dropify-wrapper dropify-preview dropify-infos dropify-infos-inner pdropify-filename spanfile-icon': {
    marginRight: [{ unit: 'px', value: 2 }]
  },
  'dropify-wrapper dropify-preview dropify-infos dropify-infos-inner pdropify-infos-message': {
    marginTop: [{ unit: 'px', value: 15 }],
    paddingTop: [{ unit: 'px', value: 15 }],
    fontSize: [{ unit: 'px', value: 12 }],
    position: 'relative',
    opacity: '.5'
  },
  'dropify-wrapper dropify-preview dropify-infos dropify-infos-inner pdropify-infos-message::before': {
    content: '''',
    position: 'absolute',
    top: [{ unit: 'px', value: 0 }],
    left: [{ unit: '%H', value: 0.5 }],
    WebkitTransform: 'translate(-50%, 0)',
    transform: 'translate(-50%, 0)',
    background: '#FFF',
    width: [{ unit: 'px', value: 30 }],
    height: [{ unit: 'px', value: 2 }]
  },
  'dropify-wrapper:hover dropify-clear': {
    opacity: '1'
  },
  'dropify-wrapper:hover dropify-preview dropify-infos': {
    opacity: '1'
  },
  'dropify-wrapper:hover dropify-preview dropify-infos dropify-infos-inner': {
    marginTop: [{ unit: 'px', value: -5 }]
  },
  'dropify-wrappertouch-fallback': {
    height: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: '!important' }]
  },
  'dropify-wrappertouch-fallback:hover': {
    backgroundImage: 'none',
    WebkitAnimation: 'none',
    animation: 'none'
  },
  'dropify-wrappertouch-fallback dropify-preview': {
    position: 'relative',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'dropify-wrappertouch-fallback dropify-preview dropify-render': {
    display: 'block',
    position: 'relative'
  },
  'dropify-wrappertouch-fallback dropify-preview dropify-infos dropify-infos-inner pdropify-infos-message::before': {
    display: 'none'
  },
  'dropify-wrappertouch-fallbackhas-preview dropify-message': {
    display: 'none'
  },
  'dropify-wrappertouch-fallback dropify-preview dropify-render dropify-font-file': {
    position: 'relative',
    WebkitTransform: 'translate(0, 0)',
    transform: 'translate(0, 0)',
    top: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }]
  },
  'dropify-wrappertouch-fallback dropify-preview dropify-render dropify-font-file::before': {
    marginTop: [{ unit: 'px', value: 30 }],
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  'dropify-wrappertouch-fallback dropify-preview dropify-render img': {
    position: 'relative',
    WebkitTransform: 'translate(0, 0)',
    transform: 'translate(0, 0)'
  },
  'dropify-wrappertouch-fallback dropify-preview dropify-infos': {
    position: 'relative',
    opacity: '1',
    background: '0 0'
  },
  'dropify-wrappertouch-fallback dropify-preview dropify-infos dropify-infos-inner': {
    position: 'relative',
    top: [{ unit: 'px', value: 0 }],
    WebkitTransform: 'translate(0, 0)',
    transform: 'translate(0, 0)',
    padding: [{ unit: 'px', value: 5 }, { unit: 'px', value: 90 }, { unit: 'px', value: 5 }, { unit: 'px', value: 0 }]
  },
  'dropify-wrappertouch-fallback dropify-preview dropify-infos dropify-infos-inner p': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'relative',
    width: [{ unit: '%H', value: 1 }],
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#777',
    textAlign: 'left',
    lineHeight: [{ unit: 'px', value: 25 }]
  },
  'dropify-wrappertouch-fallback dropify-preview dropify-infos dropify-infos-inner pdropify-filename': {
    fontWeight: '700'
  },
  'dropify-wrappertouch-fallback dropify-preview dropify-infos dropify-infos-inner pdropify-infos-message': {
    marginTop: [{ unit: 'px', value: 0 }],
    paddingTop: [{ unit: 'px', value: 0 }],
    fontSize: [{ unit: 'px', value: 11 }],
    position: 'relative',
    opacity: '1'
  },
  'dropify-wrappertouch-fallback dropify-message': {
    WebkitTransform: 'translate(0, 0)',
    transform: 'translate(0, 0)',
    padding: [{ unit: 'px', value: 40 }, { unit: 'px', value: 0 }, { unit: 'px', value: 40 }, { unit: 'px', value: 0 }]
  },
  'dropify-wrappertouch-fallback dropify-clear': {
    top: [{ unit: 'string', value: 'auto' }],
    bottom: [{ unit: 'px', value: 23 }],
    opacity: '1',
    borderColor: 'rgba(119, 119, 119, .7)',
    color: '#777'
  },
  'dropify-wrappertouch-fallback:hover dropify-preview dropify-infos dropify-infos-inner': {
    marginTop: [{ unit: 'px', value: 0 }]
  },
  'dropify-wrapper dropify-loader': {
    position: 'absolute',
    top: [{ unit: 'px', value: 15 }],
    right: [{ unit: 'px', value: 15 }],
    display: 'none',
    zIndex: '9'
  },
  'dropify-wrapper dropify-loader::after': {
    display: 'block',
    position: 'relative',
    width: [{ unit: 'px', value: 20 }],
    height: [{ unit: 'px', value: 20 }],
    WebkitAnimation: 'rotate .6s linear infinite',
    animation: 'rotate .6s linear infinite',
    borderRadius: '100%',
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#CCC' }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#777' }],
    borderLeft: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#CCC' }],
    borderRight: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#777' }],
    content: ''''
  },
  'dropify-wrapper dropify-errors-container': {
    position: 'absolute',
    left: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 0 }],
    right: [{ unit: 'px', value: 0 }],
    bottom: [{ unit: 'px', value: 0 }],
    zIndex: '3',
    background: 'rgba(243, 65, 65, .8)',
    textAlign: 'left',
    visibility: 'hidden',
    opacity: '0',
    WebkitTransition: 'visibility 0s linear .15s, opacity .15s linear',
    transition: 'visibility 0s linear .15s, opacity .15s linear'
  },
  'dropify-wrapper dropify-errors-container ul': {
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 20 }, { unit: 'px', value: 10 }, { unit: 'px', value: 20 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'absolute',
    left: [{ unit: 'px', value: 0 }],
    top: [{ unit: '%V', value: 0.5 }],
    WebkitTransform: 'translateY(-50%)',
    transform: 'translateY(-50%)'
  },
  'dropify-wrapper dropify-errors-container ul li': {
    marginLeft: [{ unit: 'px', value: 20 }],
    color: '#FFF',
    fontWeight: '700'
  },
  'dropify-wrapper dropify-errors-containervisible': {
    visibility: 'visible',
    opacity: '1',
    WebkitTransitionDelay: '0s',
    transitionDelay: '0s'
  },
  'dropify-wrapper~dropify-errors-container ul': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 15 }, { unit: 'px', value: 0 }, { unit: 'px', value: 15 }, { unit: 'px', value: 0 }]
  },
  'dropify-wrapper~dropify-errors-container ul li': {
    marginLeft: [{ unit: 'px', value: 20 }],
    color: '#F34141',
    fontWeight: '700'
  }
});
