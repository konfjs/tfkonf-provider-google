import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleTagsTagKeyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleTagsTagKeyArgs {
  description?: string;
  parent: string;
  purpose?: string;
  purpose_data?: { [key: string]: string };
  short_name: string;
  timeouts?: GoogleTagsTagKeyArgsTimeouts;
}

export class google_tags_tag_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleTagsTagKeyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_tags_tag_key", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get namespaced_name(): string {
    return `${this.resourceType}.${this.resourceName}.namespaced_name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get short_name(): string {
    return `${this.resourceType}.${this.resourceName}.short_name`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
