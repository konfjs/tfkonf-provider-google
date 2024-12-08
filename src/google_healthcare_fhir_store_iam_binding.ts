import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareFhirStoreIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleHealthcareFhirStoreIamBindingArgs {
  fhir_store_id: string;
  members: string[];
  role: string;
  condition?: GoogleHealthcareFhirStoreIamBindingArgsCondition;
}

export class google_healthcare_fhir_store_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleHealthcareFhirStoreIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_fhir_store_iam_binding", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get fhir_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.fhir_store_id`;
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
