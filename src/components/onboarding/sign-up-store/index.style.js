import STYLE from 'constants/style'

export default {
  base: {
    display: 'flex',
    flexDirection: 'column',

    position: 'absolute',
    height: '100%',
    left: 40,
    right: 40,
  },

  title: {
    flex: 0.2,

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title__text: {
    fontWeight: 'bold',
    fontSize: 32,
    color: STYLE.COLOR.BLUE,
    paddingRight: 120,
  },

  becomeVendor: {
    flex: 0.2,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  logInLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logInLink__text: {
    paddingLeft: 15,

    fontWeight: 600,
    fontSize: 16,
    color: STYLE.COLOR.BLUE,
  },
  button__location: {
    marginTop: 81,
    flex: 1,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  help__link__location: {
    marginTop: 5,
    flex: 1,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  help__link__button: {
    color: STYLE.COLOR.CYAN,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    borderWidth: 0,
    paddingRight: 0,
  },
  continue__button: {
    color: STYLE.COLOR.CYAN,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    borderWidth: 0,
  },
  continue__text: {
    marginRight: 20,
    fontWeight: STYLE.FONT.WEIGHT.BOLD,
    fontSize: 16,
  },
  help__link__text: {
    marginRight: 0,
    fontWeight: STYLE.FONT.WEIGHT.BOLD,
    fontSize: 16,
  },
  continue__circle: {
    width: '48px',
    height: '48px',
    left: '283px',
    top: '444px',
    background: '#5EBAA0',
    borderRadius: '70px',

    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
  },
  spacer: {
    marginTop: 30,
  },
}