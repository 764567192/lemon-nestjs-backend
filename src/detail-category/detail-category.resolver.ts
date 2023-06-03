import { Args, Query, Resolver } from '@nestjs/graphql';
import { DetailCategory } from './models/detail-category.model';
import { DetailCategoryService } from './detail-category.service';

@Resolver(() => DetailCategory)
export class DetailCategoryResolver {
  constructor(private readonly detailCategoryService: DetailCategoryService) {}

  @Query(() => [DetailCategory])
  async detailCategories(
    @Args('detailType') detailType: number,
  ): Promise<DetailCategory[]> {
    return this.detailCategoryService.findAllByType(detailType);
  }
}
