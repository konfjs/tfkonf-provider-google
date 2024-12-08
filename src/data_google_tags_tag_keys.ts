import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleTagsTagKeysArgs {
  parent: string;
}

export class data_google_tags_tag_keys extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleTagsTagKeysArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_tags_tag_keys", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get keys(): string {
    return `data.${this.resourceType}.${this.resourceName}.keys`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }
}
