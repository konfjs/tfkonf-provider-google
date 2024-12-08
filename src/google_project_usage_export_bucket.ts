import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleProjectUsageExportBucketArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleProjectUsageExportBucketArgs {
  bucket_name: string;
  prefix?: string;
  timeouts?: GoogleProjectUsageExportBucketArgsTimeouts;
}

export class google_project_usage_export_bucket extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleProjectUsageExportBucketArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_project_usage_export_bucket", resourceName);
  }

  get bucket_name(): string {
    return `${this.resourceType}.${this.resourceName}.bucket_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
