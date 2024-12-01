import { Test, TestingModule } from '@nestjs/testing';
import { LinkController } from './link.controller';
import { LinkService } from './link.service';
describe('AppController', () => {
  let appController: LinkController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LinkController],
      providers: [LinkService],
    }).compile();

    appController = app.get<LinkController>(LinkController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHealth()).toBe('healthy');
    });
  });
});
