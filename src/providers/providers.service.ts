import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Provider } from './entities/provider.entity';

@Injectable()
export class ProvidersService {
constructor(
  @InjectRepository(Provider)
  private providerRepository: Repository<Provider>
){}

  create(createProviderDto: CreateProviderDto) {
    return this.providerRepository.save(createProviderDto);
  }

  findAll() {
    return this.providerRepository.find();
  }

  findByName(name: string) {
    return this.providerRepository.findBy({
      providerName: Like(`%${name}%`)
    })
  }

  findOne(id: string) {
    return this.providerRepository.findOneBy({
      providerId: id
    })
  }

  async update(id: string, updateProviderDto: UpdateProviderDto) {
    const producto = await this.providerRepository.preload({ 
      providerId: id,
      ...updateProviderDto
    })
    return this.providerRepository.save(producto);
  }

  remove(id: string) {
    return this.providerRepository.delete({
      providerId: id
    })
  }
}
