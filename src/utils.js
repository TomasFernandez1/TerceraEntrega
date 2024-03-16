import { fileURLToPath } from 'url'
import { dirname } from 'path'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from './config/config.js'
import { faker } from '@faker-js/faker'

const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)



export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

export const isValidPassword = (password, userPassword) => bcrypt.compareSync(password, userPassword)

export const generateToken = (user) => jwt.sign(user, config.tokenKey, { expiresIn: '1d' })


export const generateUser = () => {
  let numberOfProducts = parseInt(faker.string.numeric(1, { bannedDigits: ['0'] }))

  let products = []

  for (let i = 0; i < numberOfProducts; i++) {
    products.push(generateProducts())
  }

  return {
    id: faker.database.mongodbObjectId(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    sex: faker.person.sex(),
    birthDay: faker.date.birthdate(),
    phone: faker.phone.number(),
    image: faker.image.avatar(),
    products
  }
}

const generateProducts = () => {
  return {
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    department: faker.commerce.department(),
    stock: parseInt(faker.string.numeric()),
    description: faker.commerce.productDescription(),
  }
}
