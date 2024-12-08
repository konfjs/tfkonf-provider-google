import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareHl7V2StoreIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleHealthcareHl7V2StoreIamBindingArgs {
  hl7_v2_store_id: string;
  members: string[];
  role: string;
  condition?: GoogleHealthcareHl7V2StoreIamBindingArgsCondition;
}

export class google_healthcare_hl7_v2_store_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleHealthcareHl7V2StoreIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_hl7_v2_store_iam_binding", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get hl7_v2_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.hl7_v2_store_id`;
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
