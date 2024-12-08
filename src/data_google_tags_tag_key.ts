import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleTagsTagKeyArgs {
  parent: string;
  short_name: string;
}

export class data_google_tags_tag_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleTagsTagKeyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_tags_tag_key", resourceName);
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get namespaced_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.namespaced_name`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }

  get short_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.short_name`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }
}
