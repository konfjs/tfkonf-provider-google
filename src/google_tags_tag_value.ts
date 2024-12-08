import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleTagsTagValueArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleTagsTagValueArgs {
  description?: string;
  parent: string;
  short_name: string;
  timeouts?: GoogleTagsTagValueArgsTimeouts;
}

export class google_tags_tag_value extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleTagsTagValueArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_tags_tag_value", resourceName);
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
