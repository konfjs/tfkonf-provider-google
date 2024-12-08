import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocMetastoreServiceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataprocMetastoreServiceIamMemberArgs {
  member: string;
  role: string;
  service_id: string;
  condition?: GoogleDataprocMetastoreServiceIamMemberArgsCondition;
}

export class google_dataproc_metastore_service_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataprocMetastoreServiceIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_metastore_service_iam_member", resourceName);
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

  get service_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_id`;
  }
}
