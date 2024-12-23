import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareFhirStoreIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleHealthcareFhirStoreIamMemberArgs {
  fhir_store_id: string;
  member: string;
  role: string;
  condition?: GoogleHealthcareFhirStoreIamMemberArgsCondition;
}

export class google_healthcare_fhir_store_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleHealthcareFhirStoreIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_fhir_store_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
