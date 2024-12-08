import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleTagsTagBindingArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleTagsTagBindingArgs {
  parent: string;
  tag_value: string;
  timeouts?: GoogleTagsTagBindingArgsTimeouts;
}

export class google_tags_tag_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleTagsTagBindingArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_tags_tag_binding", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get tag_value(): string {
    return `${this.resourceType}.${this.resourceName}.tag_value`;
  }
}
