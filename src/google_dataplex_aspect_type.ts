import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexAspectTypeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataplexAspectTypeArgs {
  aspect_type_id?: string;
  description?: string;
  display_name?: string;
  labels?: { [key: string]: string };
  location?: string;
  metadata_template?: string;
  timeouts?: GoogleDataplexAspectTypeArgsTimeouts;
}

export class google_dataplex_aspect_type extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataplexAspectTypeArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_aspect_type", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get transfer_status(): string {
    return `${this.resourceType}.${this.resourceName}.transfer_status`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
