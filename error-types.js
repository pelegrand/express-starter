class RecordNotFoundError extends Error {}
class UserAlreadyExistError extends Error {}
class UnauthorizedError extends Error {}
class  BadRequestError extends Error {}
class  NoContentError extends Error {}

module.exports = {
  RecordNotFoundError,
  UserAlreadyExistError,
  UnauthorizedError,
  BadRequestError,
  NoContentError
};