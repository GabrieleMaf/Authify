// src/services/crud.service.js
export default class CrudService {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return this.model.create(data);
  }

  async findAll(filter = {}) {
    return this.model.find(filter).exec();
  }

  async findById(id) {
    return this.model.findById(id).exec();
  }

  async update(id, data) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
