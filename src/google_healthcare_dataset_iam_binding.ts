import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareDatasetIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleHealthcareDatasetIamBindingArgs {
  dataset_id: string;
  members: string[];
  role: string;
  condition?: GoogleHealthcareDatasetIamBindingArgsCondition;
}

export class google_healthcare_dataset_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleHealthcareDatasetIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_dataset_iam_binding", resourceName);
  }

  get dataset_id(): string {
    return `${this.resourceType}.${this.resourceName}.dataset_id`;
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

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
