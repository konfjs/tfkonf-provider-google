import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocClusterIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataprocClusterIamBindingArgs {
  cluster: string;
  members: string[];
  role: string;
  condition?: GoogleDataprocClusterIamBindingArgsCondition;
}

export class google_dataproc_cluster_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataprocClusterIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_cluster_iam_binding", resourceName);
  }

  get cluster(): string {
    return `${this.resourceType}.${this.resourceName}.cluster`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
