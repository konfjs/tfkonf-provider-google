import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigtableInstanceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBigtableInstanceIamBindingArgs {
  instance: string;
  members: string[];
  role: string;
  condition?: GoogleBigtableInstanceIamBindingArgsCondition;
}

export class google_bigtable_instance_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigtableInstanceIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigtable_instance_iam_binding", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
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
