import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingLinkedDatasetArgsBigqueryDataset {
}

export interface GoogleLoggingLinkedDatasetArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleLoggingLinkedDatasetArgs {
  bucket: string;
  description?: string;
  link_id: string;
  bigquery_dataset?: GoogleLoggingLinkedDatasetArgsBigqueryDataset[];
  timeouts?: GoogleLoggingLinkedDatasetArgsTimeouts;
}

export class google_logging_linked_dataset extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleLoggingLinkedDatasetArgs) {
    const meta = {bigquery_dataset:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_linked_dataset", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lifecycle_state(): string {
    return `${this.resourceType}.${this.resourceName}.lifecycle_state`;
  }

  get link_id(): string {
    return `${this.resourceType}.${this.resourceName}.link_id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }
}
