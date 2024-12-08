import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexDatascanIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexDatascanIamBindingArgs {
  data_scan_id: string;
  members: string[];
  role: string;
  condition?: GoogleDataplexDatascanIamBindingArgsCondition;
}

export class google_dataplex_datascan_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataplexDatascanIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_datascan_iam_binding", resourceName);
  }

  get data_scan_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_scan_id`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
