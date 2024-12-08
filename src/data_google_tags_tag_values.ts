import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleTagsTagValuesArgs {
  parent: string;
}

export class data_google_tags_tag_values extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleTagsTagValuesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_tags_tag_values", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }

  get values(): string {
    return `data.${this.resourceType}.${this.resourceName}.values`;
  }
}
