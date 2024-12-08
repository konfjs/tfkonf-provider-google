import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocMetastoreServiceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataprocMetastoreServiceIamBindingArgs {
  members: string[];
  role: string;
  service_id: string;
  condition?: GoogleDataprocMetastoreServiceIamBindingArgsCondition;
}

export class google_dataproc_metastore_service_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataprocMetastoreServiceIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_metastore_service_iam_binding", resourceName);
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

  get service_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_id`;
  }
}
