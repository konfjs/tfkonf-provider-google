import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocMetastoreFederationIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataprocMetastoreFederationIamMemberArgs {
  federation_id: string;
  member: string;
  role: string;
  condition?: GoogleDataprocMetastoreFederationIamMemberArgsCondition;
}

export class google_dataproc_metastore_federation_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataprocMetastoreFederationIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_metastore_federation_iam_member", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get federation_id(): string {
    return `${this.resourceType}.${this.resourceName}.federation_id`;
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
