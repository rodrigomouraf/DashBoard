import { TestBed, inject } from '@angular/core/testing';

import { DadosService } from './dados.service';

describe('DadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DadosService
    ]
  }));

  it('should ...', inject([DadosService], (service: DadosService) => {
    const service: DadosService = TestBed.get(DadosService);
    expect(service).toBeTruthy();
  }));
});
