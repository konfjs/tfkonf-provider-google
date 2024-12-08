import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexDatascanIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexDatascanIamMemberArgs {
  data_scan_id: string;
  member: string;
  role: string;
  condition?: GoogleDataplexDatascanIamMemberArgsCondition;
}

export class google_dataplex_datascan_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataplexDatascanIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_datascan_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
