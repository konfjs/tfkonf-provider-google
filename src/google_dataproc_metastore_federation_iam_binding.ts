import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocMetastoreFederationIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataprocMetastoreFederationIamBindingArgs {
  federation_id: string;
  members: string[];
  role: string;
  condition?: GoogleDataprocMetastoreFederationIamBindingArgsCondition;
}

export class google_dataproc_metastore_federation_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataprocMetastoreFederationIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_metastore_federation_iam_binding", resourceName);
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
