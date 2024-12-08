import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexEntryTypeArgsRequiredAspects {
  type?: string;
}

export interface GoogleDataplexEntryTypeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataplexEntryTypeArgs {
  description?: string;
  display_name?: string;
  entry_type_id?: string;
  labels?: { [key: string]: string };
  location?: string;
  platform?: string;
  system?: string;
  type_aliases?: string[];
  required_aspects?: GoogleDataplexEntryTypeArgsRequiredAspects[];
  timeouts?: GoogleDataplexEntryTypeArgsTimeouts;
}

export class google_dataplex_entry_type extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataplexEntryTypeArgs) {
    const meta = {required_aspects:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_entry_type", resourceName);
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

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
