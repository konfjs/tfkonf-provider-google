import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleTagsLocationTagBindingArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleTagsLocationTagBindingArgs {
  location?: string;
  parent: string;
  tag_value: string;
  timeouts?: GoogleTagsLocationTagBindingArgsTimeouts;
}

export class google_tags_location_tag_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleTagsLocationTagBindingArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_tags_location_tag_binding", resourceName);
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
