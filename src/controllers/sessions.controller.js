export const register = async (req, res, next) => {
  try {
    res.status(501).json({
      status: 'info',
      message: 'Funcionalidad de registro prevista para la siguiente entrega',
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    res.status(501).json({
      status: 'info',
      message: 'Funcionalidad de login prevista para la siguiente entrega',
    });
  } catch (error) {
    next(error);
  }
};

export const current = async (req, res, next) => {
  try {
    res.status(501).json({
      status: 'info',
      message: 'Funcionalidad de sesión actual prevista para la siguiente entrega',
    });
  } catch (error) {
    next(error);
  }
};
